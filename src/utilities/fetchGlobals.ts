import payload from "payload";
import { getPayloadClient } from "../getPayload";
import { Footer, GeneralSetting, MainMenu } from "../payload-types";

export const fetchGlobals = async (): Promise<{
    mainMenu: MainMenu,
    footer: Footer,
    generalSettings: GeneralSetting,
}> => {

    const payload = await getPayloadClient();

    const mainMenu = await (await payload).findGlobal({
        slug: 'main-menu',
        showHiddenFields: true,
    });

    const footer = await (await payload).findGlobal({
        slug: 'footer',
        showHiddenFields: true,
    });

    const generalSettings = await (await payload).findGlobal({
        slug: 'general-settings',
        showHiddenFields: true,
    });

    return {
        mainMenu: mainMenu,
        footer: footer,
        generalSettings: generalSettings,
    };
}