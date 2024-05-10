function solution(id_list, report, k) {
  const reportInfos = {};
  const countInfos = {};

  id_list.forEach((ele) => (reportInfos[ele] = new Set()));
  id_list.forEach((ele) => (countInfos[ele] = 0));

  report.reduce((acc, cur) => {
    const [reporterUser, reportedUser] = cur.split(' ');
    reportInfos[reportedUser].add(reporterUser);

    return acc;
  }, reportInfos);

  const result = Object.entries(reportInfos).reduce((acc, [key, value], i) => {
    if (value.size >= k) {
      Array.from(value).forEach((ele) => countInfos[ele]++);
    }
    return acc;
  }, countInfos);

  return Object.values(result);
}
