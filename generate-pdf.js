import puppeteer from 'puppeteer';

const generatePDF = async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Set viewport for consistent rendering
  await page.setViewport({ width: 1200, height: 1600 });
  
  console.log('Loading CV...');
  await page.goto('http://localhost:5173/', { 
    waitUntil: 'networkidle0',
    timeout: 30000 
  });
  
  // Wait for animations to complete
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  console.log('Generating PDF...');
  await page.pdf({
    path: 'Igor_Trefilov_CV.pdf',
    format: 'A4',
    printBackground: true,
    scale: 0.8,
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    }
  });
  
  await browser.close();
  console.log('✅ PDF generated: Igor_Trefilov_CV.pdf');
};

generatePDF().catch(console.error);
