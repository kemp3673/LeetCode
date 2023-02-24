var isSymmetric = function(root) {
  if (!root) return true;
  return isMirror(root.left, root.right);
}

var isMirror = function(left, right) {
  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.val !== right.val || !isMirror(left.left, right.right) || !isMirror(left.right, right.left)) {
    return false;
  } else {
    return true;
  }
}

