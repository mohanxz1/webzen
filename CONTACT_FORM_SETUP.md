# Contact Form Setup Guide

## Current Status

Your contact form is now working as a **demo version** that shows success messages without actually sending emails.

## To Make It Send Real Emails

### Option 1: Use Formspree (Recommended)

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form with your email: `reachout.webzen@gmail.com`
3. Copy your form endpoint (looks like `https://formspree.io/f/xpzgkqbw`)
4. Replace the form action in `index.html`:

   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: Use EmailJS

1. Go to [EmailJS.com](https://www.emailjs.com) and create a free account
2. Set up your email service (Gmail, Outlook, etc.)
3. Create a template for your contact form
4. Get your public key and template ID
5. Replace the EmailJS code in `main.js`

### Option 3: Use Web3Forms

1. Go to [Web3Forms.com](https://web3forms.com) and create a free account
2. Get your access key
3. Replace the form action in `index.html`:

   ```html
   <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
   ```

### Option 4: Simple mailto (Works immediately)

- The form will open the user's email client
- User can send the email manually
- Not ideal for user experience but works without setup

## Current Form Features

- ✅ Form validation (name, email, message)
- ✅ Loading states and user feedback
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Error handling
- ✅ Success messages

## Testing

1. Fill out the form on your website
2. Check the browser console for form data
3. You should see a success message
4. The form should reset after submission

## For Production

Choose one of the email services above and follow their setup instructions. The form is ready to work with any of these services!
