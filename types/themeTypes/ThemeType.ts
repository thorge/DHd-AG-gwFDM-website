export type ThemeTypes = {
    name: string;
    dark: boolean;
    variables?: object;
    colors: {
        primary?: string;
        secondary?: string;
        anchor?: string,
        info?: string;
        success?: string;
        accent?: string;
        warning?: string;
        error?: string;
        lightprimary?: string;
        lightsecondary?: string;
        lightsuccess?: string;
        lighterror?: string;
        lightinfo?: string;
        lightwarning?: string;
        textPrimary?: string;
        textSecondary?: string;
        borderColor?: string;
        hoverColor?: string;
        inputBorder?: string;
        containerBg?: string;
        surface?: string;
        'on-surface'?: string;
        'on-surface-variant'?: string;
        'on-background'?: string;
        grey100?: string;
        grey200?: string;
        muted?:string;
    };
};
