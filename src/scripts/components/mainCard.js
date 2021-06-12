const mainCard = (() => {
    /**
     * Card containing all the contents of the user interface.
     */
    
    const _mainCardNode = document.getElementById('mainCard');


    const resizeSmaller = () => {
        /**
         * Resizes the height of the card to its default size.
         */
        _mainCardNode.style.height = '250px';
    }


    const resizeBigger = () => {
        /**
         * Resizes the height of the card to fit contents of data from API.
         */
        _mainCardNode.style.height = '650px';
    }

    
    return { resizeSmaller, resizeBigger }
})();


export { mainCard }