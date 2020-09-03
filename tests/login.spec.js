import conf from '../conf';
import dotenv from 'dotenv';
import LoginPage from '../page-objects/loginPage';
import MailinatorPage from '../page-objects/MailinatorPage';
import { t } from 'testcafe';

dotenv.config();
const randomNum = Math.random()

const { entryPage } = conf;
const { ENTRYCODE, PASSWORD } = process.env;

fixture `Entry Page`
    .page `${entryPage}`;

test('enter code', async() => {
    await LoginPage.enterCode(ENTRYCODE);
    await LoginPage.clickSubmit();
    await LoginPage.clickIAmTalent();
    await LoginPage.clickJoinForFree();
    await LoginPage.enterFirstName('Test');
    await LoginPage.enterLastName('User');
    await LoginPage.enterEmail(`testuser-${randomNum}@mailinator`);
    await LoginPage.enterUserName('Test-User');
    await LoginPage.enterPassword(PASSWORD);
    await LoginPage.confirmPassword(PASSWORD);
});

test('visit mailinator and check email', async () => {
    await MailinatorPage.visitPage();
    await MailinatorPage.visitMailBox();
    await MailinatorPage.selectEmail();

});

test.skip('WIP: update account credentials', async () => {

})