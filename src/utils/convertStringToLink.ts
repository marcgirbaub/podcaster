const convertStringToLink = (description: string) => {
  const patternCheckRegex = /(\S+\.\S+\/\S+)/g;

  const descriptionWithLinks = description.replace(
    patternCheckRegex,
    (match: string) => {
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
