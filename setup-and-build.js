const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  // Step 2 & 3: Copy page-fixed.tsx to page.tsx
  const fixedPath = path.join(__dirname, 'app', 'page-fixed.tsx');
  const pagePath = path.join(__dirname, 'app', 'page.tsx');
  
  console.log('Step 2 & 3: Replacing page.tsx...');
  const content = fs.readFileSync(fixedPath, 'utf-8');
  fs.writeFileSync(pagePath, content, 'utf-8');
  console.log('✓ page-fixed.tsx copied to page.tsx');
  
  // Verify the file exists
  const files = fs.readdirSync(path.join(__dirname, 'app'));
  const pageFiles = files.filter(f => f.startsWith('page'));
  console.log('Current page files:', pageFiles);
  
  // Step 4: Run npm build
  console.log('\nStep 4: Running npm run build...');
  const buildOutput = execSync('npm run build', { cwd: __dirname, encoding: 'utf-8' });
  console.log(buildOutput);
  console.log('✓ Build completed successfully!');
  
  // Step 5: Provide dev server command
  console.log('\nStep 5: Ready to start development server.');
  console.log('Run: npm run dev');
  
} catch (error) {
  console.error('Error:', error.message);
  if (error.stdout) console.log('STDOUT:', error.stdout.toString());
  if (error.stderr) console.log('STDERR:', error.stderr.toString());
  process.exit(1);
}
