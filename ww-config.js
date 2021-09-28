export default {
    options: {
        sizable: true,
    },
    editor: {
        label: {
            fr: 'Vidéo',
            en: 'Vidéo',
        },
        icon: 'play',
        menuOptions: {
            quick: {
                sections: [
                    'provider',
                    'url',
                    'file',
                    'previewImage',
                    'autoplay',
                    'muted',
                    'loop',
                    'controls',
                    'preload',
                ],
                bind: [{ prop: 'url', label: { en: 'Bind video url' } }],
            },
        },
    },
    properties: {
        provider: {
            label: {
                en: 'Platform',
                fr: 'Plateforme',
            },
            type: 'TextSelect',
            section: 'settings',
            options: {
                options: [
                    { value: 'weweb', default: true, label: { en: 'WeWeb', fr: 'WeWeb' } },
                    { value: 'youtube', label: { en: 'Youtube', fr: 'Youtube' } },
                    { value: 'twitch', label: { en: 'Twitch', fr: 'Twitch' } },
                    { value: 'dailymotion', label: { en: 'Dailymotion', fr: 'Dailymotion' } },
                    { value: 'vimeo', label: { en: 'Vimeo', fr: 'Vimeo' } },
                ],
            },
            defaultValue: 'youtube',
        },
        url: {
            path: 'url',
            label: { en: 'Video url', fr: 'Url de la vidéo' },
            type: 'Text',
            section: 'settings',
            options: {
                placeholder: 'Url',
            },
            multilang: true,
            bindable: true,
            hidden: content => content.provider === 'weweb',
            defaultValue: {
                en: 'https://youtu.be/76CMCIW-wGk',
            }
        },
        file: {
            label: { en: 'File', fr: 'Fichier' },
            type: 'Video',
            section: 'settings',
            bindable: true,
            hidden: content => content.provider !== 'weweb',
            defaultValue: '',
        },
        previewImage: {
            label: { en: 'Preview image', fr: "Image de d'aperçu" },
            type: 'Image',
            section: 'settings',
            bindable: true,
            hidden: content => content.provider !== 'weweb',
            defaultValue: '',
        },

        autoplay: {
            label: { en: 'Autoplay', fr: 'Lecture automatique' },
            type: 'TextRadioGroup',
            section: 'settings',
            options: {
                choices: [
                    {
                        default: true,
                        value: false,
                        title: { en: 'Start', fr: 'Début' },
                        icon: 'none',
                    },
                    {
                        value: true,
                        title: { en: 'Center', fr: 'Milieu' },
                        icon: 'tick',
                    },
                ],
            },
            defaultValue: false,
        },
        muted: {
            label: { en: 'Muted', fr: 'Muet' },
            type: 'TextRadioGroup',
            section: 'settings',
            options: {
                choices: [
                    {
                        default: true,
                        value: false,
                        title: { en: 'Start', fr: 'Début' },
                        icon: 'none',
                    },
                    {
                        value: true,
                        title: { en: 'Center', fr: 'Milieu' },
                        icon: 'tick',
                    },
                ],
            },
            defaultValue: false,
        },
        loop: {
            label: { en: 'Loop', fr: 'Lecture en boucle' },
            type: 'TextRadioGroup',
            section: 'settings',
            options: {
                choices: [
                    {
                        default: true,
                        value: false,
                        title: { en: 'Start', fr: 'Début' },
                        icon: 'none',
                    },
                    {
                        value: true,
                        title: { en: 'Center', fr: 'Milieu' },
                        icon: 'tick',
                    },
                ],
            },
            defaultValue: false,
        },
        controls: {
            label: { en: 'Controls', fr: 'Contrôles' },
            type: 'TextRadioGroup',
            section: 'settings',
            options: {
                choices: [
                    {
                        value: false,
                        title: { en: 'Start', fr: 'Début' },
                        icon: 'none',
                    },
                    {
                        default: true,
                        value: true,
                        title: { en: 'Center', fr: 'Milieu' },
                        icon: 'tick',
                    },
                ],
            },
            defaultValue: true,
        },

        preload: {
            label: { en: 'Preload', fr: 'Précharger' },
            type: 'TextRadioGroup',
            section: 'settings',
            hidden: content => content.provider !== 'weweb',
            bindable: true,
            options: {
                choices: [
                    {
                        default: true,
                        value: false,
                        title: { en: 'Start', fr: 'Début' },
                        icon: 'none',
                    },
                    {
                        value: true,
                        title: { en: 'Center', fr: 'Milieu' },
                        icon: 'tick',
                    },
                ],
            },
            defaultValue: true,
        },
    },
};
