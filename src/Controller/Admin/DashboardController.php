<?php


namespace App\Controller\Admin;


use App\Entity\Activity;
use App\Entity\Company;
use App\Entity\RoadTrip;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{

    /**
     * @Route("/dashboard", name="dashboard")
     */
    public function index(EntityManagerInterface $entityManager){

        $users = $entityManager->getRepository(User::class)->count([]);
        $activities = $entityManager->getRepository(Activity::class)->count([]);
        $companies = $entityManager->getRepository(Company::class)->count([]);
        $roadtrips = $entityManager->getRepository(RoadTrip::class)->count([]);

        return $this->render("admin/dashboard.html.twig", [
            "users" => $users,
            "activities" => $activities,
            "companies" => $companies,
            "roadTrip" => $roadtrips,
        ]);
    }

    /**
     * @Route("/dashboard/charts/{type}")
     * @param string $type
     * @param EntityManagerInterface $entityManager
     */
    public function getChart(string $type, EntityManagerInterface $entityManager)
    {
        $data = [];
        switch ($type){
            case "users":
                $data = $entityManager->getRepository(User::class)->findBy([], ["createdAt" => "ASC"]);
                break;
            case "activities":
                $data = $entityManager->getRepository(Activity::class)->findBy([], ["createdAt" => "ASC"]);
                break;
            case "roadtrips":
                $data = $entityManager->getRepository(RoadTrip::class)->findBy([], ["createdAt" => "ASC"]);
                break;
            case "companies":
                $data = $entityManager->getRepository(Company::class)->findBy([], ["createdAt" => "ASC"]);
                break;
        }

        $charts = [];

        foreach ($data as $value) {
            if (!key_exists($value->getCreatedAt()->format("d-m-Y"), $charts)){
                $charts[$value->getCreatedAt()->format("d-m-Y")] = 0;
            }
            $charts[$value->getCreatedAt()->format("d-m-Y")] += 1;
        }


        if (count($charts) < 20){
            for ($i=0; $i < 20 - count($charts); $i++){

                if ($i < count($charts) / 2){
                    if (key_exists((new \DateTime())->modify("-$i days")->format("d-m-Y"), $charts)) continue;
                    $charts[(new \DateTime())->modify("-$i days")->format("d-m-Y")] = 0;
                }else{
                    if (key_exists((new \DateTime())->modify("-$i days")->format("d-m-Y"), $charts)) continue;
                    $charts[(new \DateTime())->modify("+$i days")->format("d-m-Y")] = 0;
                }
            }
        }
        return new JsonResponse(["data" => $charts], 200);
    }
}
