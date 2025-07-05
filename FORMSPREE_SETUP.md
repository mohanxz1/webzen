# Formspree Configuration Guide

## Setting up Contact Form

The contact form on the WebZen website uses Formspree for form handling. Follow these steps to set it up:

### Step 1: Create a Formspree Account

1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create a New Form

1. Click "New Form" in your Formspree dashboard
2. Enter your email address: `reachout.webzen@gmail.com`
3. Choose a form name (e.g., "WebZen Contact Form")
4. Copy the form endpoint URL

### Step 3: Update the Website

1. Open `main.js` file
2. Find line 15 (approximately):

   ```javascript
   fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

3. Replace `YOUR_FORM_ID` with your actual form ID from Formspree

### Step 4: Configure Form Settings

In your Formspree dashboard, you can:

- Set up auto-responders
- Configure spam protection
- Set up email notifications
- Add form redirects

### Step 5: Test the Form

1. Submit a test message through your website
2. Check your email for the form submission
3. Verify the form is working correctly

## Alternative Form Handlers

If you prefer not to use Formspree, here are other options:

### Netlify Forms (if hosting on Netlify)

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
```
  <!-- your form fields -->
</form>
```

### EmailJS
```javascript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
  });
```

### Custom Backend
You can create your own form handler using:
- Node.js with Express
- PHP with PHPMailer
- Python with Flask/Django
- Any other server-side language

## Form Validation

The current form includes client-side validation for:
- Name (minimum 2 characters)
- Email (valid email format)
- Message (minimum 10 characters)

## Security Considerations

- The form includes basic XSS protection
- Formspree provides spam protection
- Consider adding a CAPTCHA for additional security

## Customization

You can customize the form by:
- Adding more fields
- Modifying validation rules
- Changing the success/error messages
- Adding file upload capability (with Formspree Pro)

## Troubleshooting

Common issues:
- **Form not submitting**: Check the Formspree endpoint URL
- **Not receiving emails**: Check spam folder and Formspree settings
- **Validation errors**: Ensure all required fields are filled
- **JavaScript errors**: Check browser console for error messages
