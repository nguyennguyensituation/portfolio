const CASE_STUDIES = {
  "word-salad": {
    "items": [
      {
        "imagePath":"word-salad/word-salad-title.png",
        "altText":"Word Salad logo",
        "caption":"Word Salad is a loving homage to the most popular puzzles from <i>The New York Times</i>. It combines Connections, Wordle, and the crossword into a single game.<br><br>I built this app using vanilla JS."
      },
      {
        "imagePath":"word-salad/game_board.png",
        "altText":"Game board with sixteen cards that contain a word or a puzzle",
        "caption":"The board is comprised of 16 cards. Some of the cards already have words on them. Some of the cards contain a puzzle.<br><br>Your first goal is to solve all the puzzles to reveal all the words."
      },
      {
        "imagePath":"word-salad/wordle_or_crossword.png",
        "altText":"Completed Wordle puzzle and crossword puzzle",
        "caption":"Click on a blank card to open a puzzle. The puzzle will be either a Wordle or a crossword. Solve the puzzle to reveal the word.<br><br>The app keeps track of the words you've guessed and won't let you submit the same word more than once. The word you submit must also be in the Wordle dictionary."
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
    "githubLink":"https://github.com/nguyennguyensituation/word_salad"
  },
  "nguyen-streak": {
    "items": [
      {
        "imagePath":"nguyen-streak/nguyen-streak-title.png",
        "altText":"Nguyen Streak logo",
        "caption": "Nguyen Streak (pronounced <i>[win strēk]</i>) is an fullstack application to track and organize your wins.<br><br>I built it using Ruby on Rails and vanilla JS."
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
        "caption":"You can see a summary of your wins by category and your account profile information."
      }
    ],
    "githubLink":"https://github.com/nguyennguyensituation/win_on_rails"
  },
  "axel":{
    "items": [
      {
        "imagePath":"axel/axel-title.png",
        "altText":"AXEL logo",
        "caption": "I designed and built the frontend for AXEL, a learning app used to train and onboard employees.<br><br>For three years, I was the product owner and frontend developer for AXEL. It was built with PHP, MySQL, and vanilla JS."
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
        "caption": "AXEL was the primary tool for new hire training and continuing education for multiple departments. There were dozens of online classes as well as interactive quizzes.<br><br>The training team was able to see the (anonymized) quiz data and adjust the training materials in real time."
      }
    ]
  }
}

export { CASE_STUDIES };