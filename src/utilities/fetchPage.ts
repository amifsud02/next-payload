import { getPayloadClient } from "../getPayload";
import { Page } from "../payload-types";

export const fetchPage = async (slug: string): Promise<Page | null> => {
    const payload = await getPayloadClient();

    const page = await (await payload).find({
        collection: 'pages',
        where: {
            slug: {
                equals: slug || 'home',
            }
        }
    })

    return page.docs[0];
}