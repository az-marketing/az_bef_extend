((Drupal) => {
  Drupal.behaviors.nestedUl = {
    attach: (context, settings) => {
      const listItems = context.querySelectorAll('li');
      listItems.forEach((li) => {
        if (li.querySelector('ul')) {
          li.classList.add('has-nested-ul');
        }
      });
    }
  };
})(Drupal);
