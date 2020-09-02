import { Selector, t, ClientFunction } from 'testcafe';

const LoginPage = {
    enterCode: async (password) => {
        const inputField = Selector('#login_lock');
        await t.typeText(inputField, password);
    },
    
    clickSubmit: async() => {
        const submitButton = Selector('.button_green');
        await t.click(submitButton);
    },

    clickIAmTalent: async() => {
        const talentButton = Selector('.button_green').withText('I AM TALENT');
        await t.click(talentButton);
    },  

    clickJoinForFree: async () => {
        const joinButton = Selector('.button_grey').withText(/join for free/i);
        await t.click(joinButton);
    },

    enterFirstName: async (firstName) => {
        /** TestCafe is saying element is not visible. Need to find workaround for this
         * getComputedStyle(document.querySelector("[data-qa-id="director-checkbox"]")).visibility
         * shows that it is visible on chrome console. 
         */ 
        
        // const setHeight = ClientFunction((selector) => {
        //     const el = document.querySelector(selector);
        //     el.style.width = '1px';
        //     el.style.height = '1px';
        // });
        // await setHeight('#talfirstname');
        // await t.typeText('#talfirstname', firstName)
        
        // const elementWithId = Selector(id => document.getElementById(id));
        // const visibleElementWithId = elementWithId.with({
        //     visibilityCheck: true
        // });
        
        // const visibleButton = await visibleElementWithId('talfirstname');
        // await t.typeText(visibleButton, firstName)
        // const form0 = Selector('.signup-talent1-form-sec').nth(0);
        // const firstNameInput = form0.find('input').nth(0);
        // const firstNameInput = Selector('input').withAttribute('id', 'talfirstname');
        // const firstNameInput = Selector('#talfirstname').with({visibilityCheck: false});
        // await t.typeText(firstNameInput, firstName)
    },

    enterLastName: async (lastName) => {
        const lastNameInput = Selector('#tallastname');
        await t.click(lastNameInput);
        await t.typeText(lastNameInput, lastName)
    },

    enterEmail: async (email) => {
        const emailInput = Selector('#talemail');
        await t.typeText(emailInput, email)
    },

    enterUserName: async (username) => {
        const usernameInput = Selector('#talusername');
        await t.typeText(usernameInput, username)
    },

    enterPassword: async (password) => {
        const passwordInput = Selector('#talpassword');
        await t.typeText(passwordInput, password)
    },

    confirmPassword: async (password) => {
        const passwordInput = Selector('#talconfpassword');
        await t.typeText(passwordInput, password)
    }

}

export default LoginPage;