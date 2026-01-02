    function redirectToLink(linkType) {
      var baseUrl = 'https://github.com/Wheelman-v2/Personalized_Fonts/raw/main';
      var specificPaths = {
        'drfont': 'drfont/drfont.zip',
        'Pilseung_Gothic': 'Pilseung_Gothic/필승고딕.zip',
        // 'font2': 'AnotherFolder/another_font.zip',
        // 필요에 따라 링크 추가
      };

      var specificPath = specificPaths[linkType];
      if (specificPath) {
        var fullUrl = baseUrl + '/' + specificPath;
        window.location.href = fullUrl;
      } else {
        console.error('잘못된 링크 유형:', linkType);
      }

    }
