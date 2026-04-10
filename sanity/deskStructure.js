export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Posts')
        .child(S.documentTypeList('post').title('Posts')),
      S.listItem()
        .title('Site Assets')
        .child(
          S.document()
            .schemaType('siteAssets')
            .documentId('site-assets')
            .title('Site Assets')
        ),
    ])