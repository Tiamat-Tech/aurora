import { StatisticsController } from "../../../../lib/controllers/statistics-controller";
import { authentication } from "../../../../lib/middleware/authentication";
import { Router } from "../../../../lib/router";

export default async function handler(request, response) {
  const router = new Router(request, response);

  await router.use(authentication);
  await router.route("GET", StatisticsController.index);

  router.fallback();
}
