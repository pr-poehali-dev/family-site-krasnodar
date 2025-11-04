import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const sections = [
  {
    id: 1,
    title: 'Главные новости',
    icon: 'Newspaper',
    description: 'Актуальные новости о социальной поддержке и помощи',
    color: 'bg-blue-50 hover:bg-blue-100',
  },
  {
    id: 2,
    title: 'Социальные программы',
    icon: 'Users',
    description: 'Программы поддержки семей и детей Краснодарского края',
    color: 'bg-green-50 hover:bg-green-100',
  },
  {
    id: 3,
    title: 'Социальные пособия и услуги',
    icon: 'Gift',
    description: 'Информация о пособиях и услугах для семей',
    color: 'bg-orange-50 hover:bg-orange-100',
  },
  {
    id: 4,
    title: 'Календарь мероприятий',
    icon: 'Calendar',
    description: 'Предстоящие события и мероприятия',
    color: 'bg-purple-50 hover:bg-purple-100',
  },
  {
    id: 5,
    title: 'Мониторинг и отчетность',
    icon: 'BarChart',
    description: 'Статистические данные и отчетные документы по предоставлению помощи и реализации программ',
    color: 'bg-pink-50 hover:bg-pink-100',
  },
  {
    id: 6,
    title: 'Обратная связь',
    icon: 'MessageSquare',
    description: 'Задайте вопрос или оставьте обращение',
    color: 'bg-yellow-50 hover:bg-yellow-100',
  },
  {
    id: 7,
    title: 'Нормативно-правовая база',
    icon: 'FileText',
    description: 'Законы и нормативные документы',
    color: 'bg-indigo-50 hover:bg-indigo-100',
  },
];

const news = [
  {
    id: 1,
    title: 'Новая программа поддержки многодетных семей',
    date: '01.11.2025',
    category: 'Программы',
  },
  {
    id: 2,
    title: 'Увеличение размера материнского капитала',
    date: '28.10.2025',
    category: 'Пособия',
  },
  {
    id: 3,
    title: 'Открытие нового центра семейной поддержки',
    date: '25.10.2025',
    category: 'Новости',
  },
];

export default function Index() {
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <div className="min-h-screen">
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('https://cdn.poehali.dev/projects/b078f386-17c5-4ff7-b96d-0afc490eb454/files/e3187b82-7076-4fe0-9afb-56f1794349b4.jpg')`,
        }}
      >
        <header className="backdrop-blur-sm bg-white/90 shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Heart" size={32} className="text-primary" />
              <h1 className="text-2xl md:text-3xl font-bold text-primary">Моя семья</h1>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="User" size={20} />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Вход / Регистрация</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="example@mail.ru" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Пароль</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <Button className="w-full">Войти</Button>
                  <Button variant="outline" className="w-full">Зарегистрироваться</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center text-white space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
              Краевая электронная система подачи заявлений на получение социальной поддержки
            </h2>
            <p className="text-xl md:text-2xl drop-shadow-md max-w-3xl mx-auto">
              Краснодарский край
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Card
              key={section.id}
              className={`${section.color} border-none transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Icon name={section.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{section.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Newspaper" size={32} className="text-primary" />
            <h2 className="text-3xl font-bold">Актуальные новости</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Icon name="MessageSquare" size={32} className="text-primary" />
              <h2 className="text-3xl font-bold">Обратная связь</h2>
            </div>
            <Card>
              <CardHeader>
                <CardDescription className="text-center">
                  Есть вопросы или предложения? Напишите нам!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="example@mail.ru"
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea
                    placeholder="Напишите ваше сообщение..."
                    rows={5}
                    value={feedbackForm.message}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
                  />
                </div>
                <Button className="w-full" size="lg">
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Heart" size={24} />
            <span className="text-xl font-semibold">Моя семья</span>
          </div>
          <p className="text-slate-300">
            Портал социальной поддержки семей Краснодарского края
          </p>
          <p className="text-slate-400 text-sm mt-2">© 2025 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}