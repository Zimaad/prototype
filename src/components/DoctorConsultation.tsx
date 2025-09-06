import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, Phone, Video, Clock, Star } from 'lucide-react';

interface DoctorConsultationProps {
  language: string;
  onBack: () => void;
}

const translations = {
  en: {
    title: 'Consult Doctor',
    available: 'Available',
    busy: 'Busy',
    offline: 'Offline',
    callNow: 'Call Now',
    videoCall: 'Video Call',
    waitTime: 'Wait time',
    minutes: 'mins',
    schedule: 'Schedule Appointment',
    rating: 'Rating'
  },
  pa: {
    title: 'ਡਾਕਟਰ ਨਾਲ ਸਲਾਹ',
    available: 'ਉਪਲਬਧ',
    busy: 'ਰੁੱਝਿਆ ਹੋਇਆ',
    offline: 'ਔਫਲਾਈਨ',
    callNow: 'ਹੁਣੇ ਕਾਲ ਕਰੋ',
    videoCall: 'ਵੀਡੀਓ ਕਾਲ',
    waitTime: 'ਉਡੀਕ ਦਾ ਸਮਾਂ',
    minutes: 'ਮਿੰਟ',
    schedule: 'ਮੁਲਾਕਾਤ ਤੈਅ ਕਰੋ',
    rating: 'ਰੇਟਿੰਗ'
  },
  hi: {
    title: 'डॉक्टर से सलाह',
    available: 'उपलब्ध',
    busy: 'व्यस्त',
    offline: 'ऑफलाइन',
    callNow: 'अभी कॉल करें',
    videoCall: 'वीडियो कॉल',
    waitTime: 'प्रतीक्षा समय',
    minutes: 'मिनट',
    schedule: 'अपॉइंटमेंट शेड्यूल करें',
    rating: 'रेटिंग'
  }
};

const doctors = [
  {
    id: 1,
    name: 'Dr. Harpreet Singh',
    namepa: 'ਡਾ. ਹਰਪ੍ਰੀਤ ਸਿੰਘ',
    namehi: 'डॉ. हरप्रीत सिंह',
    specialty: 'General Medicine',
    specialtypa: 'ਜਨਰਲ ਮੈਡੀਸਨ',
    specialtyhi: 'सामान्य चिकित्सा',
    status: 'available',
    waitTime: 5,
    rating: 4.8,
    image: '👨‍⚕️'
  },
  {
    id: 2,
    name: 'Dr. Simran Kaur',
    namepa: 'ਡਾ. ਸਿਮਰਨ ਕੌਰ',
    namehi: 'डॉ. सिमरन कौर',
    specialty: 'Pediatrics',
    specialtypa: 'ਬਾਲ ਰੋਗ ਮਾਹਿਰ',
    specialtyhi: 'बाल रोग विशेषज्ञ',
    status: 'busy',
    waitTime: 15,
    rating: 4.9,
    image: '👩‍⚕️'
  },
  {
    id: 3,
    name: 'Dr. Rajesh Kumar',
    namepa: 'ਡਾ. ਰਾਜੇਸ਼ ਕੁਮਾਰ',
    namehi: 'डॉ. राजेश कुमार',
    specialty: 'Orthopedic',
    specialtypa: 'ਹੱਡੀ ਰੋਗ ਮਾਹਿਰ',
    specialtyhi: 'हड्डी रोग विशेषज्ञ',
    status: 'offline',
    waitTime: 0,
    rating: 4.7,
    image: '👨‍⚕️'
  }
];

export function DoctorConsultation({ language, onBack }: DoctorConsultationProps) {
  const t = translations[language as keyof typeof translations] || translations.en;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'busy': return 'bg-yellow-500';
      case 'offline': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return t.available;
      case 'busy': return t.busy;
      case 'offline': return t.offline;
      default: return status;
    }
  };

  const getDoctorName = (doctor: any) => {
    switch (language) {
      case 'pa': return doctor.namepa;
      case 'hi': return doctor.namehi;
      default: return doctor.name;
    }
  };

  const getDoctorSpecialty = (doctor: any) => {
    switch (language) {
      case 'pa': return doctor.specialtypa;
      case 'hi': return doctor.specialtyhi;
      default: return doctor.specialty;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="text-primary-foreground hover:bg-primary-foreground/10"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl">{t.title}</h1>
      </div>

      {/* Doctors List */}
      <div className="px-6 py-6 space-y-4">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="p-6">
            <div className="flex items-start gap-4">
              {/* Doctor Avatar */}
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 text-3xl sm:w-16 sm:h-16 sm:text-4xl">
                {doctor.image}
              </div>

              {/* Doctor Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="min-w-0">
                    <h3 className="text-xl mb-1 break-words">{getDoctorName(doctor)}</h3>
                    <p className="text-muted-foreground break-words">{getDoctorSpecialty(doctor)}</p>
                  </div>
                  <Badge className={`${getStatusColor(doctor.status)} text-white`}>
                    {getStatusText(doctor.status)}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{doctor.rating} {t.rating}</span>
                </div>

                {/* Wait Time */}
                {doctor.status !== 'offline' && (
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{t.waitTime}: {doctor.waitTime} {t.minutes}</span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  {doctor.status === 'available' ? (
                    <>
                      <Button className="flex-1 min-w-0 bg-primary hover:bg-primary/90">
                        <Phone className="h-4 w-4 mr-2" />
                        {t.callNow}
                      </Button>
                      <Button variant="outline" className="flex-1 min-w-0">
                        <Video className="h-4 w-4 mr-2" />
                        {t.videoCall}
                      </Button>
                    </>
                  ) : doctor.status === 'busy' ? (
                    <Button variant="outline" className="w-full">
                      <Clock className="h-4 w-4 mr-2" />
                      {t.schedule}
                    </Button>
                  ) : (
                    <Button disabled className="w-full">
                      {t.offline}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
