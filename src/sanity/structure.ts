import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Blog section
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Blog")
            .items([
              S.listItem()
                .title("Published Posts")
                .child(
                  S.documentList()
                    .title("Published Posts")
                    .filter('_type == "blog" && isPublished == true')
                    .defaultOrdering([
                      { field: "publishedAt", direction: "desc" },
                    ])
                ),
              S.listItem()
                .title("Draft Posts")
                .child(
                  S.documentList()
                    .title("Draft Posts")
                    .filter('_type == "blog" && isPublished != true')
                    .defaultOrdering([
                      { field: "_createdAt", direction: "desc" },
                    ])
                ),
              S.listItem()
                .title("All Posts")
                .child(
                  S.documentList()
                    .title("All Posts")
                    .filter('_type == "blog"')
                    .defaultOrdering([
                      { field: "publishedAt", direction: "desc" },
                    ])
                ),
            ])
        ),

      // Divider
      S.divider(),

      // Portfolio sections
      S.listItem()
        .title("Portfolio")
        .child(
          S.list()
            .title("Portfolio")
            .items([
              S.listItem()
                .title("Hero")
                .child(S.documentTypeList("hero").title("Hero")),
              S.listItem()
                .title("About")
                .child(S.documentTypeList("about").title("About")),
              S.listItem()
                .title("Skills")
                .child(S.documentTypeList("skills").title("Skills")),
              S.listItem()
                .title("Experience")
                .child(
                  S.list()
                    .title("Experience")
                    .items([
                      S.listItem()
                        .title("Experience Top")
                        .child(
                          S.documentTypeList("experiencetop").title(
                            "Experience Top"
                          )
                        ),
                      S.listItem()
                        .title("Experience Items")
                        .child(
                          S.documentTypeList("experience").title(
                            "Experience Items"
                          )
                        ),
                    ])
                ),
              S.listItem()
                .title("Projects")
                .child(
                  S.list()
                    .title("Projects")
                    .items([
                      S.listItem()
                        .title("Project Top")
                        .child(
                          S.documentTypeList("projecttop").title("Project Top")
                        ),
                      S.listItem()
                        .title("Project Items")
                        .child(
                          S.documentTypeList("projects").title("Project Items")
                        ),
                    ])
                ),
            ])
        ),
    ]);
