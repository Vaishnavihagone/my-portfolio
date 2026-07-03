# EmailJS Setup Guide

Your contact form is now ready to send emails! Follow these steps to make it fully functional:

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Get Your Service ID

1. After logging in, go to **Email Services** (left sidebar)
2. Click **Add Service** and select **Gmail** (or your preferred email provider)
3. Follow the setup wizard:
   - Connect your Gmail account (make sure to allow less secure apps)
   - Once connected, you'll see your **Service ID** (looks like: `service_xxxxxxxxx`)
4. Copy this ID

## Step 3: Create an Email Template

1. Go to **Email Templates** in the sidebar
2. Click **Create New Template**
3. Add the following template variables in your message:

### Template Content Example:

```
Name: {{from_name}}
Email: {{from_email}}
Message:
{{message}}
```

4. In the template settings, set:
   - **To Email**: vaishnavihagone2001@gmail.com
   - **Subject**: New Contact Form Submission from {{from_name}}
5. Once created, copy your **Template ID** (looks like: `template_xxxxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** in the top right menu
2. Select **API Keys**
3. Copy your **Public Key**

## Step 5: Update Contact.js

Replace the three placeholder values in `src/components/Contact.js`:

```javascript
// Line 8
emailjs.init("YOUR_EMAIL_JS_KEY"); // Replace with your PUBLIC KEY

// Line 54
const result = await emailjs.send(
  "YOUR_SERVICE_ID", // Replace with your SERVICE ID
  "YOUR_TEMPLATE_ID", // Replace with your TEMPLATE ID
  {
    // ... rest of code
  },
);
```

### Example of what it should look like:

```javascript
emailjs.init("gA1B2C3D4E5F6G7H8I9");

const result = await emailjs.send(
  "service_a1b2c3d4e5f6g7",
  "template_x1y2z3a4b5c6d7",
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: "vaishnavihagone2001@gmail.com",
  },
);
```

## Step 6: Test Your Form

1. Start your development server: `npm start`
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email for the message!

## Troubleshooting

### "Failed to send message" error

- Verify all three IDs are correct
- Check that your Gmail account has "Less Secure Apps" enabled
- Make sure template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{message}}`

### Emails not arriving

- Check your spam/promotions folder
- Verify the email template is published
- Make sure your Service ID is active (check Email Services section)

### Rate Limiting

- EmailJS free plan allows 200 emails/month
- For production, consider upgrading to a paid plan

## Important Notes

- ⚠️ Your Public Key will be visible in your client-side code (this is okay)
- Never expose your Private API Key in the frontend
- All free tier recipients get a small "Powered by EmailJS" footer

---

Once you complete these steps, your contact form will be fully functional!
