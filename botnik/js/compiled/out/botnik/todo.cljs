(ns botnik.todo)

::Features
'([ ] the save bar should be swipable horizontally
  [ ] three rows per corpus
  [x] randomize starting corpuses
  [x] generated titles (for sharing))

::Issues
'([ ] desktop - the word rows are awkward to scroll
  [x] text entry mode allows corpus word insertion before it
  [ ] :mobile - text entry change should scroll story to bottom
  [ ] user input will query the server for every single word - do this once)

::Bugs
'([x] mobile - text entry squishes the screen percentages
  ([/] mobile - race condition during input text entry
    [ ] seems to break keyboard auto complete) 
  [x] color coding can break for some corpuses if the color is not a valid css name
  [x] story-text is lower-case
  [ ] on Gboard, switching to custom view, entering a word and then entering another word without hitting space erases everything you
      typed since entering custom view and replaces it with the most recent word you typed
  [ ] on SwiftKey, the reverse problem - typing space after entering a word deletes the word
  [ ] taking predictive suggestions from SwiftKey in custom entry mode doesn't enter text at all
  [ ] :sharing - yahoo can't encode newlines
  [ ] wordblock dragging doesn't trigger if word was recently under pointer for horizontal scroll
  [ ] iOS needs explicit focus to bring up keyboard) 



::remotes
'([ ] fetch source, build tree, store in state
  ([ ] use query path to get cached source or ajax))
'([ ] proper :remote in read)

"https://www.emailonacid.com/blog/article/email-development/the_importance_of_content-type_character_encoding_in_html_emails"

"http://gmaildefault.codeplex.com/"


::voicebox
'([x] three word continuations)
'([ ] better row word sorting
  ([ ] left to right scoring)
  ([ ] three word on bottom row))
'([ ] fallback suggestions include random length>3 words)
'([x] main menu 
  ([x] writing catagories [yelp lyrics]))
'([/] 2 generic columns
  ([x] fetch catagory source lists)
  ([ ] add yelp-general to review tag))
'([x] dynamic color scheme from catagory)
'([x] tapping the right/left arrow slides row over)
'([ ] better drag/swipe detection)
'([ ] tap story to move cursor to any word break)
'([ ] desktop - allow typing at any time)
'([/] browser back button
  ([x] prevent accidentally leaving the page)
  ([ ] use as undo))
'([ ] saving sessions 
  ([ ] state is saved in localStorage)
  ([ ] menu "new story", simple story management))

::dynamic-cursor
'([x] query text before cursor)
'([x] update queries whenever cursor changes)
'([x] place native input before cursor)
'([x] make sure story is properly auto scrolling
  ([x] keep cursor in screen))
'([x] if story click has novel "wordidx", move the cursor)
'([x] if story click has no "wordidx" and cursor not at end
      of story, move the cursor)
'([x] if no move is required, enter native input mode)
'([x] button for newline)
'([x] moving the cursor while editing should commit
  user text and exit edit mode)
'([ ] handle capitalization and spacing when editing)
'([ ] turbo-text wrong after resize)

'([ ] the other scrolling / screen issues you mentioned yesterday)
'([ ] single source active at a time)
'([ ] visual (yellow flash) feedback on turbotext word selection)
'([ ] align the ticks on turbo bar (they are slightly askew))
'([ ] pause/play button, or a way to start and stop 
      turbo text that doesn't involve going down to 0)
'([ ] maybe color code the turbo bar, 
      deepening red as you move right?)
'([ ] put this one at apps.botnik.org/turbotext)


::native-text
'([x] delete key not updating story)
'([x] insert appropriate whitespace/capitalization)
'([x] get query-text based on the selection)
'([x] refresh-words when selection changes)
'([x] delete button should use words)
'([ ] verify sync between textarea and story div)
'([ ] keep textarea focused when desktop)
'([ ] sync scrollbars)
'([ ] story component (optimize react updates for text ops))
'([ ] check if selection needs to be set (when entering edit mode))
'([x] fix iphone edit mode (hide input, saved, menu))
'([ ] delete button should consider punctuation a word)


'([x] ampersand breaking nlp pos)
'([x] puctuation inside middle of words collapsing)