/* 백준 허브의 전역 변수 선언 파일입니다. */
/* 포함된 변수는 다음과 같습니다. 
    languages: 백준의 언어 및 그에 맞는 file extension
    bj_level: Solved.ac의 레벨별 매핑입니다. API 호출 시 0~31까지의 번호로 레벨이 표현되는데 이를 문자열로 매핑하였습니다.
    categories: Solved.ac의 문제 카테로기를 한글 번역본으로 매핑하는 역할을 합니다.
    CommitType: uploadGit에 사용되는 enum으로 readme 혹은 code를 업로드할 때 사용됩니다.
    titleRegex: 제목 형식의 regex 정의입니다.
    uploadState: 현재 업로드 중인지를 저장하는 boolean입니다.
    bojData: 깃허브에 업로드되는 사용자의 코드와 문제 요약을 담고 있습니다.
*/

// prettier-ignore
// Languages supported by BOJ
/* let */ const languages = {
    "아희": "aheui",
    "엄준식": "umm",
    "Ada": "ada",
    "Algol 68": "a",
    "APECODE": "ape",
    "Assembly": "o",
    "Assembly (32bit)": "o",
    "Assembly (64bit)": "o",
    "awk": "awk",
    "Bash": "sh",
    "bc": "bc",
    "Befunge": "bf",
    "Boo": "boo",
    "Brainf**k": "bf",
    "C": "c",
    "C#": "cs",
    "C# 3.0 (Mono)": "cs",
    "C# 6.0 (Mono)": "cs",
    "C# 9.0 (.NET)": "cs",
    "C++": "cc",
    "C++11": "cc",
    "C++11 (Clang)": "cc",
    "C++14": "cc",
    "C++14 (Clang)": "cc",
    "C++17": "cc",
    "C++17 (Clang)": "cc",
    "C++20": "cc",
    "C++20 (Clang)": "cc",
    "C++98": "cc",
    "C++98 (Clang)": "cc",
    "C11": "c",
    "C11 (Clang)": "c",
    "C2x": "c",
    "C2x (Clang)": "c",
    "C90": "c",
    "C90 (Clang)": "c",
    "C99": "c",
    "C99 (Clang)": "c",
    "Cobol": "cob",
    "Cobra": "cobra",
    "Coq": "v",
    "Crystal": "cr",
    "D": "d",
    "D (LDC)": "d",
    "F#": "fs",
    "F# (.NET)": "fs",
    "F# (Mono)": "fs",
    "Fortran": "f",
    "FreeBASIC": "bas",
    "Go": "go",
    "Go (gccgo)": "go",
    "Golfscript": "gs",
    "Haskell": "hs",
    "Haxe": "py",
    "INTERCAL": "i",
    "Java": "java",
    "Java 11": "java",
    "Java 15": "java",
    "Java 8": "java",
    "Java 8 (OpenJDK)": "java",
    "Kotlin": "kt",
    "Kotlin (JVM)": "kt",
    "Kotlin (Native)": "kt",
    "LOLCODE": "lol",
    "Lua": "lua",
    "Minecraft": "mca",
    "Nemerle": "n",
    "Nimrod": "nim",
    "node.js": "js",
    "Objective-C": "m",
    "Objective-C++": "mm",
    "OCaml": "ml",
    "Pascal": "pas",
    "Perl": "pl",
    "PHP": "php",
    "Pike": "pike",
    "PyPy": "py",
    "PyPy2": "py",
    "PyPy3": "py",
    "Python": "py",
    "Python 2": "py",
    "Python 3": "py",
    "Rhino": "js",
    "Ruby": "rb",
    "Ruby 1.8": "rb",
    "Ruby 1.9": "rb",
    "Ruby 2": "rb",
    "Rust": "rs",
    "Rust 2015": "rs",
    "Rust 2018": "rs",
    "Rust 2019": "rs",
    "Rust 2021": "rs",
    "Scala": "scala",
    "Scheme": "scm",
    "sed": "sed",
    "Swift": "swift",
    "SystemVerilog": "sv",
    "Tcl": "tcl",
    "Text": "txt",
    "TypeScript": "ts",
    "VB.NET 2.0 (Mono)": "vb",
    "VB.NET 4.0 (Mono)": "vb",
    "Visual Basic": "vb",
    "Visual Basic (.NET)": "vb",
    "Whitespace": "ws"
}

const languageTypes = {
    "py": "python"
}

// // If a new language is added, perform the update manually using the script below.
// // parsing all languages on https://help.acmicpc.net/language/info/all
// [...document.querySelectorAll('div.card')]
//   .map((x) => [x.querySelector('header > h3'), x.querySelector('ul > li:nth-child(2) > code')])
//   .filter((x) => !!x[0] && !!x[1])
//   .map((x) => x.map((el) => el.innerText))
//   .map((x) => [x[0].trim(), x[1].match(/Main\.(?!exe)(?!jar)([a-zA-Z]+)/)])
//   .filter((x) => !!x[0] && !!x[1])
//   .sort((a, b) => a[0].localeCompare(b[0]))
//   .forEach((x) => (languages[x[0]] = x[1][1]));
// languages['Coq'] = 'v';
// // sort languages by key
// languages = Object.entries(languages)
//   .sort((a, b) => a[0].localeCompare(b[0]))
//   .reduce((acc, cur) => {
//     acc[cur[0]] = cur[1];
//     return acc;
//   }, {});
// // get length of languages
// console.log("languages length: ", Object.keys(languages).length);
// console.log("languages: ", languages);

// BOJ Levels
const bj_level = {
  0: 'Unrated',
  1: 'Bronze V',
  2: 'Bronze IV',
  3: 'Bronze III',
  4: 'Bronze II',
  5: 'Bronze I',
  6: 'Silver V',
  7: 'Silver IV',
  8: 'Silver III',
  9: 'Silver II',
  10: 'Silver I',
  11: 'Gold V',
  12: 'Gold IV',
  13: 'Gold III',
  14: 'Gold II',
  15: 'Gold I',
  16: 'Platinum V',
  17: 'Platinum IV',
  18: 'Platinum III',
  19: 'Platinum II',
  20: 'Platinum I',
  21: 'Diamond V',
  22: 'Diamond IV',
  23: 'Diamond III',
  24: 'Diamond II',
  25: 'Diamond I',
  26: 'Ruby V',
  27: 'Ruby IV',
  28: 'Ruby III',
  29: 'Ruby II',
  30: 'Ruby I',
  31: 'Master',
};

// prettier-ignore
/* let */ const categories = {
    "0_1_bfs": "0-1 너비 우선 탐색",
    "2_sat": "2-sat",
    "a_star": "a*",
    "ad_hoc": "애드 혹",
    "aho_corasick": "아호-코라식",
    "alien": "Aliens 트릭",
    "arbitrary_precision": "임의 정밀도 / 큰 수 연산",
    "arithmetic": "사칙연산",
    "articulation": "단절점과 단절선",
    "backtracking": "백트래킹",
    "bayes": "베이즈 정리",
    "bellman_ford": "벨만–포드",
    "berlekamp_massey": "벌래캠프–매시",
    "bfs": "너비 우선 탐색",
    "biconnected_component": "이중 연결 요소",
    "bidirectional_search": "양방향 탐색",
    "binary_search": "이분 탐색",
    "bipartite_graph": "이분 그래프",
    "bipartite_matching": "이분 매칭",
    "bitmask": "비트마스킹",
    "bitset": "비트 집합",
    "bruteforcing": "브루트포스 알고리즘",
    "burnside": "번사이드 보조정리",
    "cactus": "선인장",
    "calculus": "미적분학",
    "case_work": "많은 조건 분기",
    "centroid": "centroid",
    "centroid_decomposition": "센트로이드 분할",
    "chordal_graph": "chordal graph",
    "cht": "볼록 껍질을 이용한 최적화",
    "circulation": "서큘레이션",
    "combinatorics": "조합론",
    "constructive": "구성적",
    "convex_hull": "볼록 껍질",
    "coordinate_compression": "값 / 좌표 압축",
    "crt": "중국인의 나머지 정리",
    "dancing_links": "춤추는 링크",
    "data_structures": "자료 구조",
    "degree_sequence": "차수열",
    "delaunay": "델로네 삼각분할",
    "deque": "덱",
    "dfs": "깊이 우선 탐색",
    "differential_cryptanalysis": "차분 공격",
    "dijkstra": "다익스트라",
    "directed_mst": "유향 최소 신장 트리",
    "discrete_kth_root": "이산 k제곱근",
    "discrete_log": "이산 로그",
    "discrete_sqrt": "이산 제곱근",
    "disjoint_set": "분리 집합",
    "divide_and_conquer": "분할 정복",
    "divide_and_conquer_optimization": "분할 정복을 사용한 최적화",
    "dominator_tree": "도미네이터 트리",
    "dp": "다이나믹 프로그래밍",
    "dp_bitfield": "비트필드를 이용한 다이나믹 프로그래밍",
    "dp_connection_profile": "커넥션 프로파일을 이용한 다이나믹 프로그래밍",
    "dp_deque": "덱을 이용한 다이나믹 프로그래밍",
    "dp_tree": "트리에서의 다이나믹 프로그래밍",
    "dual_graph": "쌍대 그래프",
    "duality": "쌍대성",
    "euclidean": "유클리드 호제법",
    "euler_characteristic": "오일러 지표 (χ=V-E+F)",
    "euler_phi": "오일러 피 함수",
    "euler_tour_technique": "오일러 경로 테크닉",
    "eulerian_path": "오일러 경로",
    "exponentiation_by_squaring": "분할 정복을 이용한 거듭제곱",
    "extended_euclidean": "확장 유클리드 호제법",
    "fft": "고속 푸리에 변환",
    "flow": "최대 유량",
    "floyd_warshall": "플로이드–와샬",
    "flt": "페르마의 소정리",
    "game_theory": "게임 이론",
    "gaussian_elimination": "가우스 소거법",
    "general_matching": "일반적인 매칭",
    "generating_function": "생성 함수",
    "geometry": "기하학",
    "geometry_3d": "3차원 기하학",
    "geometry_hyper": "4차원 이상의 기하학",
    "graph_traversal": "그래프 탐색",
    "graphs": "그래프 이론",
    "greedy": "그리디 알고리즘",
    "green": "그린 정리",
    "half_plane_intersection": "반평면 교집합",
    "hall": "홀의 결혼 정리",
    "hash_set": "해시를 사용한 집합과 맵",
    "hashing": "해싱",
    "heuristics": "휴리스틱",
    "hirschberg": "히르쉬버그",
    "hld": "Heavy-light 분할",
    "hungarian": "헝가리안",
    "implementation": "구현",
    "inclusion_and_exclusion": "포함 배제의 원리",
    "interpreter": "인터프리터",
    "kitamasa": "키타마사",
    "kmp": "KMP",
    "knapsack": "배낭 문제",
    "knuth": "크누스 최적화",
    "knuth_x": "크누스 X",
    "lazyprop": "느리게 갱신되는 세그먼트 트리",
    "lca": "최소 공통 조상",
    "line_intersection": "선분 교차 판정",
    "linear_algebra": "선형대수학",
    "linear_programming": "선형 계획법",
    "linearity_of_expectation": "기댓값의 선형성",
    "link_cut_tree": "링크/컷 트리",
    "linked_list": "연결 리스트",
    "lis": "가장 긴 증가하는 부분 수열: O(n log n)",
    "lucas": "뤼카 정리",
    "majority_vote": "보이어–무어 다수결 투표",
    "manacher": "매내처",
    "math": "수학",
    "matroid": "매트로이드",
    "mcmf": "최소 비용 최대 유량",
    "merge_sort_tree": "머지 소트 트리",
    "mfmc": "최대 유량 최소 컷 정리",
    "miller_rabin": "밀러–라빈 소수 판별법",
    "min_enclosing_circle": "최소 외접원",
    "mitm": "중간에서 만나기",
    "mo": "mo's",
    "mobius_inversion": "뫼비우스 반전 공식",
    "modular_multiplicative_inverse": "모듈로 곱셈 역원",
    "monotone_queue_optimization": "단조 큐를 이용한 최적화",
    "mst": "최소 스패닝 트리",
    "multi_segtree": "다차원 세그먼트 트리",
    "multipoint_evaluation": "다중 대입값 계산",
    "number_theory": "정수론",
    "numerical_analysis": "수치해석",
    "offline_dynamic_connectivity": "오프라인 동적 연결성 판정",
    "offline_queries": "오프라인 쿼리",
    "palindrome_tree": "회문 트리",
    "parametric_search": "매개 변수 탐색",
    "parsing": "파싱",
    "pbs": "병렬 이분 탐색",
    "permutation_cycle_decomposition": "순열 사이클 분할",
    "physics": "물리학",
    "pick": "픽의 정리",
    "pigeonhole_principle": "비둘기집 원리",
    "planar_graph": "평면 그래프",
    "point_in_convex_polygon": "볼록 다각형 내부의 점 판정",
    "point_in_non_convex_polygon": "오목 다각형 내부의 점 판정",
    "pollard_rho": "폴라드 로",
    "polygon_area": "다각형의 넓이",
    "precomputation": "런타임 전의 전처리",
    "prefix_sum": "누적 합",
    "primality_test": "소수 판정",
    "priority_queue": "우선순위 큐",
    "probability": "확률론",
    "pst": "퍼시스턴트 세그먼트 트리",
    "pythagoras": "피타고라스 정리",
    "queue": "큐",
    "rabin_karp": "라빈–카프",
    "randomization": "무작위화",
    "rb_tree": "레드-블랙 트리",
    "recursion": "재귀",
    "regex": "정규 표현식",
    "rope": "로프",
    "rotating_calipers": "회전하는 캘리퍼스",
    "scc": "강한 연결 요소",
    "segtree": "세그먼트 트리",
    "sieve": "에라토스테네스의 체",
    "simulated_annealing": "담금질 기법",
    "simulation": "시뮬레이션",
    "sliding_window": "슬라이딩 윈도우",
    "slope_trick": "함수 개형을 이용한 최적화",
    "smaller_to_larger": "작은 집합에서 큰 집합으로 합치는 테크닉",
    "sorting": "정렬",
    "sparse_table": "희소 배열",
    "splay_tree": "스플레이 트리",
    "sprague_grundy": "스프라그–그런디 정리",
    "sqrt_decomposition": "제곱근 분할법",
    "stable_marriage": "안정 결혼 문제",
    "stack": "스택",
    "statistics": "통계학",
    "stoer_wagner": "스토어–바그너",
    "string": "문자열",
    "suffix_array": "접미사 배열과 LCP 배열",
    "suffix_tree": "접미사 트리",
    "sweeping": "스위핑",
    "ternary_search": "삼분 탐색",
    "top_tree": "탑 트리",
    "topological_sorting": "위상 정렬",
    "tree_compression": "트리 압축",
    "tree_isomorphism": "트리 동형 사상",
    "tree_set": "트리를 사용한 집합과 맵",
    "trees": "트리",
    "trie": "트라이",
    "tsp": "외판원 순회 문제",
    "two_pointer": "두 포인터",
    "utf8": "utf-8 입력 처리",
    "voronoi": "보로노이 다이어그램",
    "z": "z"
};

// // request "https://solved.ac/api/v3/tag/list"
// fetch('https://solved.ac/api/v3/tag/list')
//   .then((response) => response.json())
//   .then((data) => data.items)
//   .then((items) =>
//     items.map((item) => {
//       const { key } = item;
//       const { name } = item.displayNames[0];
//       return { key, name };
//     }),
//   )
//   .then((items) => items.forEach((item) => (categories[item.key] = item.name)));

// // sort categories by key.
// categories = Object.entries(categories)
//   .sort((a, b) => a[0].localeCompare(b[0]))
//   .reduce((acc, cur) => {
//     acc[cur[0]] = cur[1];
//     return acc;
//   }, {});

// // get length of categories
// console.log('categories length: ', Object.keys(categories).length);
// console.log('categories: ', categories);

/* 채점 결과에 대한 각 구분 정보 */
const RESULT_CATEGORY = {
  RESULT_PENDING: 'wait',
  RESULT_PENDING_REJUDGE: 'rejudge-wait',
  RESULT_NO_JUDGE: 'no-judge',
  RESULT_PREPARE_FOR_JUDGE: 'compile',
  RESULT_JUDGING: 'judging',
  RESULT_ACCEPTED: 'ac',
  RESULT_PARTIALLY_ACCEPTED: 'pac',
  RESULT_PRESENTATION_ERROR: 'pe',
  RESULT_WRONG_ANSWER: 'wa',
  RESULT_ACCEPTED_NOT_CORRECT: 'awa',
  RESULT_TIME_LIMIT_EXCEEDED: 'tle',
  RESULT_MEMORY_LIMIT_EXCEEDED: 'mle',
  RESULT_OUTPUT_LIMIT_EXCEEDED: 'ole',
  RESULT_RUNTIME_ERROR: 'rte',
  RESULT_COMPILATION_ERROR: 'ce',
  RESULT_UNVAILABLE: 'co',
  RESULT_DELETED: 'del',
};

/* 채점 결과에 대한 각 메시지 구분 맵핑 */
const RESULT_MESSAGE = {
  [RESULT_CATEGORY.RESULT_PENDING]: '기다리는 중',
  [RESULT_CATEGORY.RESULT_PENDING_REJUDGE]: '재채점을 기다리는 중',
  [RESULT_CATEGORY.RESULT_NO_JUDGE]: '채점하지 않음',
  [RESULT_CATEGORY.RESULT_PREPARE_FOR_JUDGE]: '채점 준비 중',
  [RESULT_CATEGORY.RESULT_JUDGING]: '채점 중',
  [RESULT_CATEGORY.RESULT_ACCEPTED]: '맞았습니다!!',
  [RESULT_CATEGORY.RESULT_PARTIALLY_ACCEPTED]: '맞았습니다!!',
  [RESULT_CATEGORY.RESULT_PRESENTATION_ERROR]: '출력 형식이 잘못되었습니다',
  [RESULT_CATEGORY.RESULT_WRONG_ANSWER]: '틀렸습니다',
  [RESULT_CATEGORY.RESULT_ACCEPTED_NOT_CORRECT]: '!맞았습니다',
  [RESULT_CATEGORY.RESULT_TIME_LIMIT_EXCEEDED]: '시간 초과',
  [RESULT_CATEGORY.RESULT_MEMORY_LIMIT_EXCEEDED]: '메모리 초과',
  [RESULT_CATEGORY.RESULT_OUTPUT_LIMIT_EXCEEDED]: '출력 초과',
  [RESULT_CATEGORY.RESULT_RUNTIME_ERROR]: '런타임 에러',
};

/* state of upload for progress */
const uploadState = { uploading: false };

const multiloader = {
  wrap: null,
  nom: null,
  denom: null,
};
