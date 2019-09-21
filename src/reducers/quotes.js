//what is given
// export default (state = [], action) => {
//   return state;
// }


export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          debugger
          quote.votes = quote.votes + 1
      } else {
        quote.votes
      }})
    case 'DOWNVOTE_QUOTE':

    default:
      return state;
  }
}
