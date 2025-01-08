const CASE_STUDIES = {
  "word-salad": {
    "items": [
      {
        "imagePath":"word-salad/word-salad-title.png",
        "altText":"Word Salad logo",
        "caption":"Built with reusable React components, Word Salad features a responsive interface that easily transitions between different puzzle modes within the same session, providing real-time feedback and scoring. The application is fully responsive and designed to be intuitive and easy-to-play.<br><br>Built with: TypeScript, React, Next.js"
      },
      {
        "imagePath":"word-salad/game_board.png",
        "altText":"Game board with sixteen cards that contain a word or a puzzle",
        "caption":"The board contains 16 cards. Some of the cards have words displayed on them. The rest of the cards contain a puzzle that you'll need to solve to reveal the word."
      },
      {
        "imagePath":"word-salad/wordle_or_crossword.png",
        "altText":"Completed Wordle puzzle and crossword puzzle",
        "caption":"Select a blank card to open a puzzle. The puzzle will be either a Wordle or a crossword. Solve the puzzle to reveal the word.<br><br>The game keeps track of the words you've guessed and won't let you submit the same word more than once. The word you submit must also be in the Wordle dictionary."
      },
      {
        "imagePath":"word-salad/selected_cards.png",
        "altText":"Game board with four cards selected",
        "caption":"After all the puzzles have been played and the words have been revealed, your next goal is to find the four categories of related words.<br><br>Select a group of four cards that share something in common. You can't guess the same set of cards more than once."
      },
      {
        "imagePath":"word-salad/one_category_solved.png",
        "altText":"Game board showing completed category containing words from selected cards",
        "caption":"If you select the correct group of cards, a category will be revealed.<br><br>The game allows you to make up to three incorrect attempts to solve the categories."
      },
      {
        "imagePath":"word-salad/all_categories_solved.png",
        "altText":"Game board with four completed categories",
        "caption":"Continue selecting groups of four cards until you've found all the categories."
      }
    ],
    "githubLink":"https://github.com/nguyennguyensituation/word_salad_react"
  },
  "nguyen-streak": {
    "items": [
      {
        "imagePath":"nguyen-streak/nguyen-streak-title.png",
        "altText":"Nguyen Streak logo",
        "caption": "Nguyen Streak (pronounced <i>[win strēk]</i>) is a content management system to track and organize work accomplishments. The app makes it easier to advocate for your career at review time or update your resume because you have the data to prove it. Features secure user authentication with encrypted passwords, a database with robust CRUD operations, and an integrated search and filtering system.<br><br>v2: Ruby, Rails, SQLite3; v1: Ruby, Sinatra, PostgreSQL"
      },
      {
        "imagePath":"nguyen-streak/full-board.png",
        "altText":"App screen displaying 8 'win' cards with high-level summaries of accomplishments",
        "caption":"Instead of digging through stacks of old emails, documents, and DMs, Nguyen Streak makes it easier to keep all your \"wins\" in one place."
      },
      {
        "imagePath":"nguyen-streak/card-view.png",
        "altText":"App screen displaying single card with title, description, and date",
        "caption":"Click on any win card to see more details."
      },
      {
        "imagePath":"nguyen-streak/add-edit.png",
        "altText":"Two app screens displaying add win and edit win forms",
        "caption":"You can easily add and edit your wins."
      },
      {
        "imagePath":"nguyen-streak/filter.png",
        "altText":"App screen displaying filter with fields for date, category, keyword, and reset button",
        "caption":"You can filter your wins by date, category, and keyword."
      },
      {
        "imagePath":"nguyen-streak/my-account.png",
        "altText":"App screen displaying summary of wins by category",
        "caption":"You can see a summary of your wins by category and your account profile information. Account authentication with encrypted passwords."
      }
    ],
    "githubLink":"https://github.com/nguyennguyensituation/win_on_rails"
  },
  "axel":{
    "items": [
      {
        "imagePath":"axel/axel-title.png",
        "altText":"AXEL logo",
        "caption": "I built the front-end and designed the UI for AXEL, a learning management system that was used to train hundreds of employees across multiple departments. It was a central repository for training materials, allowing students to view course materials, take interactive quizzes, and track their learning progress.<br></br>Admins were able to upload and manage course materials and access anonymized quiz data in real time.<br></br>Built with: Vanilla JavaScript, jQuery, PHP, MySQL"
      },
      {
        "imagePath":"axel/progress-board.png",
        "altText":"Progress board with robot avatars and percentage of completed classes",
        "caption": "There were user acccounts and a \"Build Your Own Avatar \" feature where new hires could create custom anonymized avatars.<br><br>It gave them the ability to track their progress alongside the rest of their hiring class (and helped foster a healthy sense of competition)."
      },
      {
        "imagePath":"axel/onboarding.png",
        "altText":"Ecosystem diagram and office map",
        "caption": "AXEL was a new hire's introduction to the company. The goal was to provide an employee safe harbor through what could be an confusing and overwhelming experience.<br><br>It was a central resource that offered interactive office maps, product deep dives, org charts, guides to the tech ecosystem, and more."
      },
      {
        "imagePath":"axel/calendar.png",
        "altText":"Calendar with online class descriptions",
        "caption": "New hires could see calendars with their in-person class schedule alongside the online pre-learnings and classes that they were expected to complete each week."
      },
      {
        "imagePath":"axel/class-quiz.png",
        "altText":"Menu containing class list, online Git class, and multiple choice quiz",
        "caption": "AXEL was the primary tool for new hire training and continuing education for multiple departments. There were dozens of online classes as well as interactive quizzes.<br><br>The training team was able to see the (anonymized) training data, make smarter, more data-driven decisions, and adjust the course materials in real time."
      }
    ]
  }
}

export { CASE_STUDIES };