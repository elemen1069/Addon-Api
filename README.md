물론, README.md 파일에 한국어 / 영어 버튼과 작성자 정보를 추가한 예시를 아래에 제공합니다.

```markdown
# 마인크래프트 애드온 API 레포지토리

<div align="center">
  <img src="https://your-repository-image-url.png" alt="Repository Logo" width="300px">
</div>

## 소개

이 레포지토리는 마인크래프트 애드온 개발을 위한 다양한 유용한 API를 제공합니다. 현재는 반지름 계산, 음악 조작, 데이터베이스 관리 등의 기능이 포함되어 있으며, 앞으로는 마인크래프트 시간과 현실 시간을 동기화하는 API가 추가될 예정입니다.

## 기능

1. **반지름 API**
   - `getRadius(centerX, centerY, pointX, pointY)`: 두 점 간의 거리로 반지름을 계산합니다.

2. **음악 API**
   - `playMusic(trackName)`: 지정된 음악 트랙을 재생합니다.
   - `stopMusic()`: 현재 재생 중인 음악을 중지합니다.

3. **데이터베이스 API**
   - `saveData(key, value)`: 지정된 키와 값을 데이터베이스에 저장합니다.
   - `getData(key)`: 지정된 키에 해당하는 값을 반환합니다.

4. **시간 동기화 API (곧 추가 예정)**

## 설치 및 사용법

1. 이 레포지토리를 클론합니다.
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. 필요한 API를 프로젝트에 추가합니다.
   ```javascript
   const radiusApi = require('./path/to/radius-api');
   const musicApi = require('./path/to/music-api');
   const databaseApi = require('./path/to/database-api');
   // 필요한 API들을 추가하세요.

   // 사용 예시
   const distance = radiusApi.getRadius(0, 0, 3, 4);
   console.log(`두 점 간의 거리: ${distance}`);
   ```

## 언어 변경

- [English](README_EN.md)
- [한국어](README.md)

## 작성자

- **elemen**

## 기여

이 프로젝트에 기여하고 싶다면, [CONTRIBUTING.md](CONTRIBUTING.md) 파일을 참고하세요.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포되었습니다. 자세한 내용은 [LICENSE.md](LICENSE.md) 파일을 확인하세요.
```

이제 README_EN.md 파일을 생성하여 영어 버전의 내용을 작성하면 됩니다. 필요에 따라 각 언어 파일에는 해당 언어로 문서를 작성하시면 됩니다.
