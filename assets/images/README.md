# WebZen Assets

## Images Directory

This directory contains all the image assets for the WebZen website.

### Background Images (Currently using Unsplash placeholders)

**Replace the following Unsplash URLs with your actual images:**

1. **Hero Section Background**
   - Current: `https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80`
   - Replace with: `assets/images/hero-bg.jpg`
   - Recommended size: 1920x1080px
   - Theme: Technology, modern workspace, or digital landscape

2. **Mission Section Background**
   - Current: `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80`
   - Replace with: `assets/images/mission-bg.jpg`
   - Recommended size: 1920x1080px
   - Theme: Team collaboration, meeting room, or workspace

3. **About Section Background**
   - Current: `https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`
   - Replace with: `assets/images/about-bg.jpg`
   - Recommended size: 1920x1080px
   - Theme: Office environment, Kathmandu cityscape, or professional workspace

4. **Portfolio Section Background**
   - Current: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80`
   - Replace with: `assets/images/portfolio-bg.jpg`
   - Recommended size: 1920x1080px
   - Theme: Creative workspace, design tools, or portfolio showcase

5. **Process Section Background**
   - Current: `https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`
   - Replace with: `assets/images/process-bg.jpg`
   - Recommended size: 1920x1080px
   - Theme: Workflow, planning, or development process

6. **Contact Section Background**
   - Current: `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`
   - Replace with: `assets/images/contact-bg.jpg`
   - Recommended size: 1920x1080px
   - Theme: Kathmandu landmarks, communication, or office contact

### Portfolio Project Images

**Replace the following Unsplash URLs with actual project screenshots:**

1. **Kathmandu Café Website**
   - Current: `https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`
   - Replace with: `assets/images/project-cafe.jpg`
   - Recommended size: 800x600px
   - Content: Screenshot of the restaurant website

2. **Nepal Trekking Tours**
   - Current: `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`
   - Replace with: `assets/images/project-trekking.jpg`
   - Recommended size: 800x600px
   - Content: Screenshot of the trekking website

3. **Freelancer Portfolio Site**
   - Current: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`
   - Replace with: `assets/images/project-portfolio.jpg`
   - Recommended size: 800x600px
   - Content: Screenshot of the portfolio website

### Additional Assets Needed

1. **Logo Files**
   - `logo.png` - Main logo (recommended: 200x60px)
   - `logo-white.png` - White version for dark backgrounds
   - `favicon.ico` - Website favicon (16x16px, 32x32px)

2. **Team/About Images**
   - `team-photo.jpg` - Team photo or founder photo
   - `office-photo.jpg` - Office or workspace photo

### Image Optimization Tips

1. **File Formats:**
   - Use `.jpg` for photographs
   - Use `.png` for images with transparency
   - Use `.webp` for better compression (with `.jpg` fallback)

2. **Optimization:**
   - Compress images using tools like TinyPNG or ImageOptim
   - Use responsive images with different sizes for different screen sizes
   - Consider using lazy loading for better performance

3. **Accessibility:**
   - Always include meaningful alt text for all images
   - Ensure images don't convey critical information without text alternatives

### How to Update Images

1. Replace the Unsplash URLs in the following files:
   - `style.css` - Background images
   - `index.html` - Portfolio project images

2. Update the CSS file:
   ```css
   .section-bg[data-bg="hero"] {
       background-image: url('assets/images/hero-bg.jpg');
   }
   ```

3. Update the HTML file:
   ```html
   <img src="assets/images/project-cafe.jpg" alt="Kathmandu Café Website">
   ```

### Copyright Notice

Ensure all images you use are:
- Owned by you
- Licensed for commercial use
- Properly credited if required
- Optimized for web use

For free stock photos, consider:
- Unsplash (unsplash.com)
- Pexels (pexels.com)
- Pixabay (pixabay.com)

Always check the license requirements before using any image.
