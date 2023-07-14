function createTag(parent_node, tag_node, id_name, class_name, content) {
  const tag = document.createElement(tag_node);

  if (parent_node != null) {
    parent_node.append(tag);
  } else {
    const startpoint = document.getElementById("app");
    startpoint.append(tag);
  }

  if (id_name != null) {
    tag.id = id_name;
  }

  if (class_name != null) {
    tag.className = class_name;
  }

  if (content != null) {
    tag.innerHTML = content;
  }

  return tag;
}

export { createTag };
