const nodemailer = require("nodemailer");

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

/**
 * Send an invoice email to the user
 * @param {Object} user - User details (email and name)
 * @param {Object} order - Order details
 * @param {Array} cartItems - Cart items with product details
 * @returns {Object} - Success status and error (if any)
 */
const sendInvoiceEmail = async (user, order, cartItems) => {
    try {
        // Prepare the email content
        const emailContent = `
            <h1>Thank you for your order, ${user.name}!</h1>
            <p>Your order has been successfully placed. Below are the details:</p>
            <h2>Order Summary</h2>
            <ul>
                ${cartItems
                    .map(
                        (item) => `
                    <li>
                        ${item.productId.name} - Quantity: ${item.quantity} - Price: $${item.productId.price}
                    </li>
                `
                    )
                    .join("")}
            </ul>
            <p><strong>Total Price: $${order.totalPrice}</strong></p>
            <p>Delivery Address: ${order.deliveryAddress.street}, ${order.deliveryAddress.city}, ${order.deliveryAddress.state}, ${order.deliveryAddress.zipCode}, ${order.deliveryAddress.country}</p>
            <p>Payment Status: ${order.paymentStatus}</p>
            <p>Thank you for shopping with us!</p>
        `;

        // Define email options
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender email address
            to: user.email, // Recipient email address
            subject: "Your Order Invoice", // Email subject
            html: emailContent, // Email content (HTML)
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: error.message };
    }
};

module.exports = { sendInvoiceEmail };