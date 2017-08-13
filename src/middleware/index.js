import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
 * next middleware as next parameter
 */
export default applyMiddleware(thunk);
