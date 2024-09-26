import { defineStore } from 'pinia'
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    setPersistence,
    browserLocalPersistence
} from 'firebase/auth';
import router from '@/router';

const auth = getAuth();
const provider = new GoogleAuthProvider();

onAuthStateChanged(auth, async (user) => {
    if (user) {
        /* DESAFIO */
        // Faça funcionar a persistencia de login.
        // envie junto com a prova 1 e adicionará  1 ponto a sua nota.
    }
});

setPersistence(auth, browserLocalPersistence);

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            displayName: '',
            email: '',
            photoURL: '',
            accessToken: '',
        },
    }),
    actions: {
        async login() {
            const result = await signInWithPopup(auth, provider);
            this.user = result.user;
            router.push('/admin/dashboard');
            console.log('usuário logado:', this.user);
        },
        async logout() {
            await signOut(auth);
            this.user = {};
            this.user.accessToken = '';
            router.push('/login');
        },
        setUser(user) {
            this.user = user;
        }
    },
    getters: {
        isLogin: (state) => !!state.user.accessToken,
        getUser: (state) => state.user,
    },
});
