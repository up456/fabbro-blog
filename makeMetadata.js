const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

// '/data/posts' 경로 설정
const postsDirectory = path.join(process.cwd(), "data", "posts");

// 모든 년도 디렉토리 순회
function processYearDirectories(baseDirectory) {
  const yearDirectories = fs.readdirSync(baseDirectory);

  const allMetadata = [];

  yearDirectories.forEach((year) => {
    const yearDirectory = path.join(baseDirectory, year);

    // 해당 년도 폴더 안에 있는 모든 Markdown 파일 순회
    const postFiles = fs
      .readdirSync(yearDirectory)
      .filter((file) => file.endsWith(".md"));

    postFiles.forEach((fileName) => {
      const filePath = path.join(yearDirectory, fileName);
      const fileContent = fs.readFileSync(filePath, "utf-8");

      // YAML 헤더와 나머지 내용을 분리합니다.
      const parts = fileContent.split("---");

      if (parts.length >= 3) {
        const yamlHeader = parts[1].trim();
        const metadata = yaml.load(yamlHeader);

        // date를 ISO 8601 포맷으로 변환
        metadata.date = new Date(metadata.date).toISOString().slice(0, 10);
        // 파일명을 메타데이터에 title로 추가 (예: slug.md이면 slug로 추가)
        metadata.title = fileName.replace(".md", "");

        allMetadata.push(metadata);
      }
    });
  });

  return allMetadata;
}

// 메타데이터 수집
const metadataList = processYearDirectories(postsDirectory);

// metadata.json 파일에 메타데이터 저장
const metadataFilePath = path.join(process.cwd(), "data", "metadata.json");
fs.writeFileSync(metadataFilePath, JSON.stringify(metadataList, null, 2));

console.log("metadata.json 파일이 생성되었습니다.");
