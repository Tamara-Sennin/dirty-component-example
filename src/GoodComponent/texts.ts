import { UserData } from '../utils/fakeClient'

//<editor-fold desc="Types">
type Greetings = {
    HELLO: {
        default: string
        [key: string]: string
    }
    WELCOME: {
        default: string
        [key: string]: string
    }
}

type NavigationTexts = {
    [key: string]: {
        url: string
        desc: string
    }
}
//</editor-fold>

//<editor-fold desc="Constants">
const GREETINGS: Greetings = {
    HELLO: {
        default: 'Hello',
        DEU: 'Hallo',
    },
    WELCOME: {
        default: 'Welcome',
        DEU: 'Willkommen',
    },
}

const NAVIGATION_TEXTS: NavigationTexts = {
    GIRL_SECTION: {
        url: 'https://www.somegirlsurl.com',
        desc: 'Go to girl\'s section',
    },
    BOY_SECTION: {
        url: 'https://www.someboysurl.com',
        desc: 'Go to boy\'s section',
    },
    WOMEN_SECTION: {
        url: 'https://www.somewomensurl.com',
        desc: 'Go to women\'s section',
    },
    MEN_SECTION: {
        url: 'https://www.somemensurl.com',
        desc: 'Go to men\'s section',
    },
}
//</editor-fold>

const getUserGreeting = (user: UserData) => {
    const firstPart = user.isClient
        ? (GREETINGS.HELLO[user.country] ?? GREETINGS.HELLO.default)
        : (GREETINGS.WELCOME[user.country] ?? GREETINGS.WELCOME.default)

    return `${firstPart} ${user.name}!`
}

const getNavigationLink = (user: UserData) => {
    if (user.age < 18) {
        return user.gender === 'female'
            ? NAVIGATION_TEXTS.GIRL_SECTION
            : NAVIGATION_TEXTS.BOY_SECTION
    }
    return user.gender === 'female'
        ? NAVIGATION_TEXTS.WOMEN_SECTION
        : NAVIGATION_TEXTS.MEN_SECTION
}

export const getTexts = (user?: UserData) => {
    return user ? {
        greeting: getUserGreeting(user),
        navigationLink: getNavigationLink(user),
    } : {
        greeting: null,
        navigationLink: null,
    }
}