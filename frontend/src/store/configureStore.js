import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import logger from 'redux-logger'


import storage from 'redux-persist/lib/storage';


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

import {
    auth,
    news
} from '../services/reducers'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["auth"]
}

const rootReducer = combineReducers({
    auth: auth,
    news: news
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    middleware: [thunk, logger]
});

export const persistor = persistStore(store);
