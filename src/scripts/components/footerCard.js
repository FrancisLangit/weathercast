const footerCard = (() => {
    /**
     * Card below main card that displays supplementary details.
     */

    const _footerCardNode = document.getElementById('footerCard');
    const _licenseHref = (
        'https://github.com/FrancisLangit/weathercast/blob/main/LICENSE');
    const _githubHref = 'https://github.com/FrancisLangit/weathercast/';


    const _getLinkNode = (linkText, linkHref) => {
        /**
         * Returns an "a" node with innerHTML and href attributes set to 
         * arguments passed.
         *  
         * @param {linkText} linkText innerHTML of the node. 
         * @param {linkHref} linkHref href attribute of the node. 
         */
        let linkNode = document.createElement('a');
        linkNode.innerHTML = linkText;
        linkNode.href = linkHref;
        return linkNode;
    }


    const _setUp = () => {
        /**
         * Fills up the node of the footer card.
         */
        const copyrightText = 'Copyright © 2021';
        const licenseLink = _getLinkNode('License', _licenseHref);
        const githubLink = _getLinkNode('GitHub', _githubHref);
        _footerCardNode.append(
            copyrightText, ' • ', licenseLink, ' • ', githubLink);
    }

    _setUp();
})();


export { footerCard } 