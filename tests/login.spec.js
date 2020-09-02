import conf from '../conf';
import dotenv from 'dotenv';
import LoginPage from '../page-objects/loginPage';

dotenv.config();
const randomNum = Math.random()

const { entryPage } = conf;
// const { ENTRYCODE, PASSWORD } = process.env;

fixture `Entry Page`
    .page `${entryPage}`;

test('enter code', async() => {
    await LoginPage.enterCode(process.env.ENTRYCODE);
    await LoginPage.clickSubmit();
    await LoginPage.clickIAmTalent();
    await LoginPage.clickJoinForFree();
    await LoginPage.enterFirstName('Test');
    await LoginPage.enterLastName('User');
    await LoginPage.enterEmail(`testuser-${randomNum}@mailinator`);
    await LoginPage.enterUserName('Test-User');
    await LoginPage.enterPassword(process.env.PASSWORD);
    await LoginPage.confirmPassword(process.env.PASSWORD);
});

test('visit mailinator and check email', () => {

});

test('update account credentials', () => {
    
})