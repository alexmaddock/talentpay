import { Selector, t } from 'testcafe';
import conf from '../conf';

const { mailinator, mailinatorAddress } = conf;

const MailinatorPage = {
    visitPage: async () => {
        await t.navigateTo(mailinator);
    },
    
    visitMailBox: async() => {
        const inputBox = Selector('#addOverlay');
        const goButton = Selector('#go-to-public');
        await t.typeText(inputBox, mailinatorAddress);
        await t.click(goButton);
    },

    selectEmail: async() => {
        const tableName = Selector('tr').withAttribute('id', /row_talentpaytesting/).find('td').withText('Verify');
        await t.click(tableName);
    }
}

export default MailinatorPage;