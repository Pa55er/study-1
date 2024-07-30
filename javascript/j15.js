console.clear();

// 에러처리
function readFile(path) {
    throw new Error("파일을 찾을 수 없음");
    return "파일을 읽어오는 함수가 잘 실행됬다고 치자";
}

function processFile(path) {
    let content;
    try {
        content = readFile(path);
    } catch (error) {
        console.log(error);
        console.error();
    } finally {
        console.log("성공이든, 실패든! 마지막으로 리소스를 정리할 수 있음");
    }

    const result = content + "OK";
    return result;
}

const result = processFile("경로");
console.log(result);
