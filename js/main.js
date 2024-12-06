 //get all faqs
const accordionItems = document.querySelectorAll('.acc');

accordionItems.forEach(
    (item) => {
        // new identifiers
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');
        const open = item.querySelector('.open');
        const close = item.querySelector('.close');

        answer.style.display = 'none';
        close.style.display = 'none';
        // question.style.color = ' hsl(292, 42%, 14%)';

        // for anybody question
        question.addEventListener('click', () => {
            // check if it active
            const isActive = question.classList.contains('active');

            accordionItems.forEach((otherItem) => {
                const otherQuestion = otherItem.querySelector('.question');
                const otherAnswer = otherItem.querySelector('.answer');
                const otherOpen = otherItem.querySelector('.open');
                const otherClose = otherItem.querySelector('.close');

                otherQuestion.classList.remove('active');
                otherAnswer.style.display = 'none';

                otherOpen.style.display = 'block';
                otherClose.style.display = 'none';
            });

            if (!isActive) {
                question.classList.add('active');
                answer.style.display = 'block';
                close.style.display = 'block';
                open.style.display = 'none';
            }

            else {
                question.classList.remove('active');
                answer.style.display = 'none';
                close.style.display = 'none';
                open.style.display = 'block';
            }
        });
    }
)


