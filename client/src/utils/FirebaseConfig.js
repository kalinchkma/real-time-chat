/** @format */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyA-pcaajGSAG2v-0FGCygydiDaEczRRA7I',
	authDomain: 'r-e-com.firebaseapp.com',
	projectId: 'r-e-com',
	storageBucket: 'r-e-com.appspot.com',
	messagingSenderId: '557086331045',
	appId: '1:557086331045:web:9a8649dfc3a08f7cbafd4c',
	measurementId: 'G-X60PJK8G9J',
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
