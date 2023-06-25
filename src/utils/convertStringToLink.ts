const convertStringToLink = (description: string) => {
  const patternCheckRegex = /(\S+\.\S+\/\S+)/g;

  const descriptionWithLinks = description.replace(
    patternCheckRegex,
    (match: string) => {
      if (!match.startsWith("http://") && !match.startsWith("https://")) {
        let index = match.lastIndexOf("http://");
        if (index === -1) {
          index = match.lastIndexOf("https://");
        }
        if (index !== -1) {
          match = match.substring(index);
        }
      }

      if (match.startsWith("http://") || match.startsWith("https://")) {
        return '<a class="link" href="' + match + '">' + match + "</a>";
      } else {
        return '<a class="link" href="https://' + match + '">' + match + "</a>";
      }
    }
  );
  return descriptionWithLinks;
};

export default convertStringToLink;
