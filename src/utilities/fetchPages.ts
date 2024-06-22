import { getPayloadClient } from "../getPayload";

export const fetchPages = async (): Promise<Array<{
    slug: string;
}>> => {
    const payload = await getPayloadClient();

    const pages = await (await payload).find({
        collection: 'pages',
        limit: 0,
    });

    return pages.docs.map(doc => ({ slug: doc.slug as string }));
}