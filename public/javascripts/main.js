/**
 * 
 * @authors Tom Hu (webmaster@h1994st.com)
 * @date    2014-11-13 16:35:38
 * @version 0.0.1
 */

(function (document) {
  $(document).ready(function() {
    // init pjax
    $(document).pjax('[data-pjax] a, a[data-pjax]', '#main-container');

    // pjax start
    $(document).on('pjax:start', function(event) {
      NProgress.start();
    });

    // pjax end
    $(document).on('pjax:end', function(event) {
      NProgress.done();
    });
  });
})(document);