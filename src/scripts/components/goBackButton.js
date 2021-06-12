import { 
    cityForm, 
    containerCard,
    temperatureButton,
} from '../../index.js';


const goBackButton = (() => {
    /**
     * Button the user clicks to go back to city search form.
     */

    const _goBackButtonNode = document.getElementById('goBackButton');


    const _goBacktoForm = () => {
        /**
         * Makes card go back to city search form.
         */
        document.getElementById('data').innerHTML = '';
        document.getElementById('cityFormInput').value = '';
        temperatureButton.reset();
        containerCard.resizeSmaller();
        cityForm.show();
        _goBackButtonNode.style.display = 'none';
    }


    const _setUp = () => {
        /**
         * Adds click event listerner to node of button.
         */
        _goBackButtonNode.addEventListener('click', _goBacktoForm);
    }


    const unhide = () => {
        /**
         * Unhides the node of the button from user interface.
         */
        _goBackButtonNode.style.display = 'inline';
    }


    _setUp();

    return { unhide }
})();


export { goBackButton }