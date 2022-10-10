export const layout = "layouts/archive.njk";
export const title = "Archive";

export default function* ({ search, paginate, theme }) {
  const posts = search.pages("type=post", "date=desc");

  console.log(theme?.paginate_size)

  for (
    const data of paginate(posts, { url, size: theme?.paginate_size || 10 })
  ) {
    // Show the first page in the menu
    if (data.pagination.page === 1) {
      data.menu = {
        visible: true,
        order: 1,
      };
    }

    yield data;
  }
}

function url(n) {
  if (n === 1) {
    return "/archive/";
  }

  return `/archive/${n}/`;
}
