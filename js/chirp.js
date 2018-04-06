function chirp(n) {
  // FIX ME
  function chirpHelper(num, result) {
    if (num === 0) {
      return result;
    }
    result = result + 'chirp ';
    return chirpHelper(num - 1, result);
  }
  return chirpHelper(n, '');
}

$(document).ready(function() {
  $('#result').html(chirp(3));
});
