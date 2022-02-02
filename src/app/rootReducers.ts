import bookmarkReducer from './bookmarks/bookmarksSlice';
import postLikesReducer from './postLikes/postLikes';
import commentLikesReducer from './commentLikes/commentLikes';
import darkmodeReducer from './darkmode/darkmode';
import pagesReducer from './pages/pages';
import mediaRunningReducer from './mediaRunning/mediaRunning';
import listingReducer from './listings/listing.reducer';
import repositoriesReducer from '../state/reducers/repositoriesReducer';

const rootReducers = {
    bookmark: bookmarkReducer,
    postLike: postLikesReducer,
    darkmode: darkmodeReducer,
    commentLikes: commentLikesReducer,
    pages: pagesReducer,
    mediaRunning: mediaRunningReducer,
    listing: listingReducer,
    repositories: repositoriesReducer,
};

export default rootReducers;
