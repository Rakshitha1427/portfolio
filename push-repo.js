const { execSync } = require('child_process');
const path = require('path');

const repoPath = r'C:\Users\draks\Downloads\portfolio';

try {
  console.log('Checking git status...');
  const status = execSync(`git -C "${repoPath}" status`, { encoding: 'utf8' });
  console.log(status);
  
  console.log('\nAdding git remote...');
  try {
    execSync(`git -C "${repoPath}" remote add origin https://github.com/Rakshitha1427/portfolio.git`, { encoding: 'utf8' });
  } catch (e) {
    if (e.message.includes('already exists')) {
      console.log('Remote already exists');
    }
  }
  
  console.log('\nRenaming branch to main...');
  execSync(`git -C "${repoPath}" branch -M main`, { encoding: 'utf8' });
  
  console.log('\nPushing to GitHub...');
  const pushResult = execSync(`git -C "${repoPath}" push -u origin main`, { encoding: 'utf8', stdio: 'pipe' });
  console.log(pushResult);
  
  console.log('\nSuccess! Repository pushed to GitHub');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
