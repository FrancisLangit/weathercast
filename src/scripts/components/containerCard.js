const containerCard = (() => {
    /**
     * Card containing all the contents of the user interface.
     */
    
    const _containerCardNode = document.getElementById('containerCard');


    const resizeSmaller = () => {
        /**
         * Resizes the height of the card to its default size.
         */
        _containerCardNode.style.height = '310px';
    }


    const resizeBigger = () => {
        /**
         * Resizes the height of the card to fit contents of data from API.
         */
        _containerCardNode.style.height = 'auto';
    }

    
    return { resizeSmaller, resizeBigger }
})();


export { containerCard }