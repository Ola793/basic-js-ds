function removeKFromList(l, k) {
  if (!l) {
    return null;
  } else if (l.value === k) {
    return l.next ? removeKFromList(l.next, k) : null;
  } else {
    l.next = removeKFromList(l.next, k);
  }

  return l;
}

module.exports = {
  removeKFromList
};
